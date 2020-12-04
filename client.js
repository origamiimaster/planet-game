function init() {
    let canvas = document.getElementById("canvas")
    canvas.height = window.innerHeight - 0
    canvas.width = window.innerWidth - 200
    window.addEventListener('resize', (e) => {
        canvas.height = window.innerHeight - 0
        canvas.width = window.innerWidth - 200
    })
}
init()
class Menu {
    topLevelItems = []
    secondaryDetails = []
    holder = null
    detail = null
    constructor(holder_id, detail_id) {
        this.holder = holder_id
        this.detail = detail_id
        // Assume age is zero, start with the basic options. 
        this.topLevelItems = ["Population", "Resources"]
        this.secondaryDetails = [
            {
                title: "Assign your population to jobs",
                choices: {
                    "Hunter": null,
                    "Gatherer": null
                }
            },
            {
                title: "Manage your resources here",
                choices: {
                    "Rocks": null,
                    "Wood": null,
                    "Food": null
                }
            }
        ]
    }
    updateHtmlTopLevel() {
        let elements = []
        let ul = document.getElementById(this.holder)
        while (ul.firstChild){
            ul.removeChild(ul.firstChild)
        }
        for (let i = 0; i < this.topLevelItems.length; i++){
            let element = document.createElement("li")
            ul.appendChild(element)
            element.innerHTML = this.topLevelItems[i]
            element.addEventListener('click',(e)=>{
                this.getDetails(this.secondaryDetails[i].title)
            })
            elements.push(element)
        }
        return elements
    }
    getDetails(details) {
        let detail = document.getElementById(this.detail)
        detail.innerHTML = details
    }
}

let myMenu = new Menu("main_menu", "detail");
