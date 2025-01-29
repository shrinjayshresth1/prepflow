import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function Resume() {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-screen   bg-black text-white flex flex-col " >
            <div className="w-3/5  h-screen m-auto gap-10 bg-black text-white flex flex-col items-center justify-center   " >
                <h1 className="rounded-full bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text text-shadow p-4 font-bold text-4xl stroke-2 stroke-b" >PrepFlow.ai</h1>
                <Input className="w-3/5 h-1/20 p-2    placeholder:text-xl  text-2x " type="text" placeholder="Job Title" />
                <Textarea className="w-3/5 h-1/4  placeholder:text-xl    text-2xl p-2" type="text" placeholder="Job Description" />
                <Input className="w-3/5 h-auto p-2    text-2xl " type="file" placeholder="Job Title" />
                <Button onClick={(() => navigate('/'))}>Analyze</Button>
            </div >
        </div>
    )
}

export default Resume
