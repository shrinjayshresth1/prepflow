import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Pencil2Icon } from '@radix-ui/react-icons'
import './App.css'
import { useNavigate } from "react-router"
function App() {

  const card_content = [{
    feature: "Resume Scoring and Optimization",
    description: 'Analyze uploaded resumes for format, grammar, and ATS  compatibility and get tailored improvements based on specific industries, roles, or job descriptions.'
  }]
  const navigate = useNavigate()
  return (
    <div className='w-screen h-screen bg-black text-white'>
      <div className='w-4/5 h-full flex flex-col items-center justify-center border border-white m-auto'>
        <h1 className="rounded-full bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text text-shadow p-4 font-bold text-4xl stroke-2 stroke-b" >PrepFlow.ai</h1>
        <h3 className='text-2xl'>One shot preparation for your next Interview</h3>
        <img src="" alt="" />
        <div className='flex gap-16 m-3 '>
          <Button className="rounded-full">Log in</Button>
          <Button className="rounded-full">Sign up</Button>
        </div>
        <Button variant={"outline"} className='rounded-full bg-gradient-to-l from-[#57502C] to-[#AF770A]'>Try out now</Button>
        <div className='grid-cols-2  grid grid-rows-2'>

          {card_content.map((card, index) => (
            <Card key={index}>
              <CardHeader>
                <Pencil2Icon />
                <CardTitle> {card.feature}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button onClick={(() => navigate('/resume'))}>Resume</Button>
      </div>
    </div>
  )
}

export default App
