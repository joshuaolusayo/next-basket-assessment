import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'

export default function ProductInfo() {
  return (
    <div className="pb-14 md:pb-16 lg:pb-20">
      <div className="container">
        <div>
          <Tabs defaultValue="description" className="w-full bg-transparent">
            <TabsList className="grid w-full grid-cols-3 bg-transparent max-w-xl mx-auto h-auto">
              <TabsTrigger
                className="font-semibold data-[state=active]:font-bold data-[state=active]:shadow-none py-8"
                value="description"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                className="font-semibold data-[state=active]:font-bold data-[state=active]:shadow-none py-8"
                value="info"
              >
                Additional Information
              </TabsTrigger>
              <TabsTrigger
                className="font-semibold data-[state=active]:font-bold data-[state=active]:shadow-none py-8"
                value="review"
              >
                Reviews (0)
              </TabsTrigger>
            </TabsList>
            <Separator />
            <TabsContent value="description" className="py-12">
              <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                <div className="xl:col-span-3 space-y-[30px]">
                  <h3 className="text-2xl font-bold">
                    the quick fox jumps over{' '}
                  </h3>
                  <p className="text-next-gray">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-next-gray border-l-[3px] border-next-green pl-6">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="text-next-gray">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
                <div className="xl:col-span-2">
                  <Image
                    className="object-cover rounded-md"
                    src="/assets/nbprodInfo.jpeg"
                    alt="Product Information"
                    width={826}
                    height={744}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
