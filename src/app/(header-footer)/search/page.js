import Search from "./page.client";

export default async function Page({ searchParams }) {
    return (
        <>
            <Search searchParams={searchParams}/>
        </>
    )
}