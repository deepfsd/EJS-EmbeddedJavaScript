import exrpess from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

var __dirname = dirname(fileURLToPath(import.meta.url));
const app = exrpess();
const port = 3000;
const d = new Date();
var day = d.getDay();

var week = "";
if(day === 0)
{
    week = "Hey it's the weekend, it's time to have fun!";
}
else
{
    week = "Hey it's a weekday, it's time to work hard!";

}

app.get("/", (req,res)=>
{
    res.render(__dirname + "/view/index.ejs",
    {
        message: week
    })
})

app.listen(port, ()=>
{
    console.log(`Server is runnning on ${port}`);
})