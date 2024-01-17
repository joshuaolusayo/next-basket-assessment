import { Button } from '@/components/ui/button'

export default function BetterExperience() {
  return (
    <div className="py-20 md:py-28 lg:py-32 bg-[url('/assets/nbexperience.jpeg')] bg-fixed">
      <div className="container">
        <div className="w-full max-w-xl mx-auto text-center space-y-[30px]">
          <span className="text-sm text-next-blue font-bold">
            Designing Better Experience
          </span>
          <h2 className="h2 text-dark font-bold text-2xl leading-[125%]">
            Problems trying to resolve the conflict between
          </h2>
          <p className="text-sm text-next-gray max-w-[447px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>
          <span className="text-next-green text-2xl font-bold inline-block">
            $16.48
          </span>
          <div className="flex justify-center">
            <Button className="bg-next-blue/80 h-auto px-10 py-[15px] hover:bg-next-blue">
              Add Your call to action
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
