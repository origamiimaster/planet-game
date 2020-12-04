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
    constructor() {
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
    getTopElements() {
        let elements = []
        this.topLevelItems.forEach(item => {
            let element = document.createElement("ul")
            element.innerHTML = item
            element.onclick = this.buttonClicked
            elements.push(element)
        })
        return elements
    }
    buttonClicked(e){
        console.log(e)
    }
    getDetails(name) {
        let index = this.topLevelItems.indexOf(name)
        if (index == -1) {
            return None
        }
        let item = this.secondaryDetails[index]
        let element = document.createElement("div")
        element.innerHTML
    }
}
