/* eslint-disable react-hooks/exhaustive-deps */
import { fetchFallback, fetchPosts } from "../utils/backend";
import { Post } from "../models/Post";
import { StrapiPagination } from "../models/strapi";
import CollectionViewer from "../components/CollectionViewer";
import PostItem from "../components/PostItem";
import { GetServerSidePropsContext, GetStaticPropsResult } from "next";
import Banner from "../components/Banner";
import Main from "../components/Main";
import Search from "../components/Search";
import { useCallback, useEffect, useMemo, useState } from "react";
import HeadPage from "../components/HeadPage";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

const PAGE_SIZE = 16;

interface Props {
    pageBanner: string;
    posts: Post[];
    pagination: StrapiPagination;
}

type InitialSearchState = {
    searchString: string;
    page: number;
}

const parseQueryPage = (page: unknown): number | null => {
    if (typeof page !== 'string') {
        return null;
    }

    const parsedPage = parseInt(page);

    if (Number.isNaN(parsedPage)) {
        return null;
    }

    return parsedPage;
}

const getInitialSearchState = (query: ParsedUrlQuery): InitialSearchState => {
    const initialSearchState = {
        searchString: "",
        page: 1,
    };
   
    if (typeof query.search === 'string') {
        initialSearchState.searchString = query.search.trim();
    }

    const page = parseQueryPage(query.page);

    if (page !== null) {
        initialSearchState.page = page;
    }

    return initialSearchState;
}

export default function PostsPage(props: Props) {
    const router = useRouter();
    const initialSearchState = useMemo(
        () => getInitialSearchState(router.query),
        [],
    );

    const [posts, setPosts] = useState(props.posts);
    const [pagination, setPagination] = useState(props.pagination);
    const [isLoading, setLoading] = useState(false);
    const [searchString, setSearchString] = useState(initialSearchState.searchString);
    const [page, setPage] = useState(initialSearchState.page);

    const handleSearch = useCallback((newSearchString: string) => {
        setPage(1);
        setSearchString(newSearchString);
    }, []);

    const syncSearchStateToQueryParams = (searchString: string, page: number): void => {
        const queryParams = {
            ...router.query,
        };

        delete queryParams.search;
        delete queryParams.page;

        if (searchString.length > 0) {
            queryParams.search = searchString;
        }

        if (page > 1) {
            queryParams.page = page.toString();
        }

        router.push(
            {
                pathname: router.pathname,
                query: queryParams,
            },
            undefined,
            {
                shallow: true,
            },
        );
    }

    useEffect(() => {
        syncSearchStateToQueryParams(searchString, page);

        function retrievePosts() {
            setLoading(true);

            fetchPosts(null, null, null, page, PAGE_SIZE, null, searchString ?? null)
                .then((it) => {
                    setPosts(it.posts);
                    setPagination(it.pagination);
                })
                .finally(() => {
                    setLoading(false);
                });
        }

        if (
            searchString === initialSearchState.searchString &&
            page === initialSearchState.page
        ) {
            setPosts(props.posts);
            setPagination(props.pagination);
        } else {
            retrievePosts();
        }
    }, [searchString, page]);

    return (
        <div>
            <HeadPage
                title="Posts"
                description="Overzicht van alle nieuwsberichten en inzendingen van ROOD"
                url="https://roodjongeren.nl/posts"
            />
            <Banner title="Posts" background={props.pageBanner} compact />
            <Main className="container">
                <Search
                    initialSearchString={initialSearchState.searchString}
                    onChange={handleSearch}
                    placeholder="Zoek op titel, auteur of inhoud"
                    isLoading={isLoading}
                />
                <CollectionViewer
                    pagination={pagination}
                    pageItems={posts.length}
                    onChangePage={setPage}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                        {posts.map((post) => (
                            <PostItem key={post.slug} post={post} />
                        ))}
                    </div>
                </CollectionViewer>
            </Main>
        </div>
    );
}

export async function getServerSideProps(
    context: GetServerSidePropsContext,
): Promise<GetStaticPropsResult<Props>> {
    const initialSearchState = getInitialSearchState(context.query);

    const [{ posts, pagination }, { pageBanner }] = await Promise.all([
        fetchPosts(
            null,
            null,
            null,
            initialSearchState.page,
            PAGE_SIZE,
            null,
            initialSearchState.searchString || null,
        ),
        fetchFallback(),
    ]);

    return {
        props: { pageBanner, posts, pagination },
    };
}
