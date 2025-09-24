// Parte do loading
const loading = document.getElementById('loading')
const container_projects = document.getElementById('container_projects')

function create_project(img_url, title, descripton, github_url) {
    const div_container = document.createElement('div')
    const div_descriptions = document.createElement('div')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const  a = document.createElement('a')

    // Adição de estilos.
    div_container.className += "bg-[#3A5A40] roundedxl-xl shadow-lg p-6 overflow-hidden flex flex-col space-y-4 w-full"
    div_descriptions.className += "flex flex-col flex-1 space-y-4 w-full"
    img.className += "w-full h-40 object-cover"
    h3.className += "text-xl font-bold mb-2"
    p.className += "text-sm text-grey-200 flex-1"
    a.className += "inline-block py-2 font-semibold text-white bg-[#588157] roundend-lg shadow-sm hover:bg-[#3A5A40] hover:shadow-[#588157] focus:outiline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300"

    // Adição de atributos.
    img.src = img_url
    img.alt = "Ilustração do " +  title

    a.href = github_url
    a.target = "_blank"
    a.rel = "noopener noreferrer"

    // Adicação do innerText.
    h3.innerText = title
    p.innerText = descripton
    a.innerText = "GitHub"

    // adição do InnerHTML.
    div_descriptions.appendChild(h3)
    div_descriptions.appendChild(p)
    div_descriptions.appendChild(a)

    div_container.appendChild(img)
    div_container.appendChild(div_descriptions)

    return div_container
}

async function get_projects() {
    const page = sessionStorage.getItem('page') || 1
    const response = await fetch(`/api/projects/?page=${page}`)
    const data = await response.json()

    sessionStorage.setItem('pages', String(Math.floor(data.count / 3)))

    return data.results
}

export async function render_projects(element) {
    loading.classList.remove('hidden')
    container_projects.classList.add('hidden')

    const data = await get_projects()

    element.innerHTML = ""
    data.map(project => {
        element.appendChild(create_project(
            project.image,
            project.title,
            project.description,
            project.url_github
        ))
    })

    loading.classList.add('hidden')
    container_projects.classList.remove('hidden')
}