let arr = [];
const sendButton = document.querySelector(".btn-send")
const showHis = document.querySelector(".btn-show")
const showList = document.querySelector(".history")
function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
class Message{
    constructor(author,senddate,messagetext) {
        this.author = author;
        this.senddate = senddate;
        this.messagetext = messagetext
      }
      toString(){
        var a = String(`${this.senddate} ${this.author}: ${this.messagetext}`)
        return a;
      }
      toHtml(){
        var a = String(`<p>${this.senddate} ${this.author}: ${this.messagetext}</p><b>`)
        return a;
      }
}
class Messenger extends Message {
    show_history(){
        let labels = document.querySelectorAll(".labclas")
        labels.forEach((item)=>{
            item.remove()
        })
        for(let i=0;i<arr.length;i++){
            let newLab = document.createElement("label")
            showList.append(newLab)
            newLab.classList.add("labclas")
            newLab.innerHTML = arr[i]
        }
    }
    send(author,text){
        this.author = author
        this.messagetext = text;
        this.senddate = gettime()
        arr.push(this.toHtml())
    }
}
let messenger = new Messenger()
sendButton.addEventListener("click",()=>{

    let name = document.querySelector("#name").value
    let text = document.querySelector("#message").value
    messenger.send(name, text)
    document.querySelector("#name").value = ""
    document.querySelector("#message").value = ""
})
showHis.addEventListener("click", ()=>{
    messenger.show_history()
})


