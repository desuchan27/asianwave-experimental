import getBillboard from "@/actions/getBillboards"
import getProducts from "@/actions/getProducts"
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList"
import Container from "@/components/ui/Container"

export const revalidate = 0

const Page = async () => {

    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard("7300e340-5e8b-4785-9135-8f55ddd1337a")
    
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard 
                    data={billboard}
                />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList
                    title="Featured Products"
                    items={products}
                />
            </div>
        </Container>
    )
}

export default Page