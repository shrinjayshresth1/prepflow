import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { useState } from "react"

function Resume() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    async function upload() {
        if (!file) {
            alert("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);  // 'resume' must match the backend field name

        try {
            const res = await axios.post("http://localhost:3000/analyze", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(res.data);
        } catch (e) {
            console.error("Upload failed:", e);
        }
    }

    return (
        <div className="w-screen h-screen   bg-black text-white flex flex-col " >
            <div className="w-3/5  h-screen m-auto gap-10 bg-black text-white flex flex-col items-center justify-center   " >
                <h1 className="rounded-full bg-gradient-to-r from-gray-400 to-white text-transparent bg-clip-text text-shadow p-4 font-bold text-4xl stroke-2 stroke-b" >PrepFlow.ai</h1>
                <Input className="w-3/5 h-1/20 p-2    placeholder:text-xl  text-2x " type="text" placeholder="Job Title" />
                <Textarea className="w-3/5 h-1/4  placeholder:text-xl    text-2xl p-2" type="text" placeholder="Job Description" />
                <Input className="w-3/5 h-auto p-2    text-2xl " type="file" placeholder="Job Title" onChange={handleFileChange} />
                <Button onClick={()=>upload()}>Analyze</Button>
            </div >
        </div>
    )
}

export default Resume
