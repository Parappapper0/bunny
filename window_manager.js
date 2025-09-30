let grid = GenerateWindow()
UpdateWindow(grid)
window.addEventListener("resize", () => UpdateWindow(grid));

function GenerateWindow() {
    
    let title = document.createElement("h1")
    title.innerHTML = "Farm Game"
    title.id = "main_title"
    document.body.appendChild(title)

    let grid = document.createElement("div")
    grid.id = "main_window"
    document.body.appendChild(grid)
    return grid
}

function UpdateWindow(grid) {
    let width = window.innerWidth * 0.5
    let height = window.innerHeight - document.getElementById("main_title").offsetHeight

    console.log(document.getElementById("main_title").offsetHeight)

    let size = Math.min(width, height)
    grid.style.width = size * 0.8 * 2 + "px"
    grid.style.height = size * 0.8 + "px"
}
