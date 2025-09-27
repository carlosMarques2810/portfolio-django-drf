// Button - navbar responsiva
const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
});

// Renderizção dinâmica dos projetos via API

import { render_projects } from "./utils.js";
const projects = document.getElementById('projects_box')
const btn_prev = document.getElementById('btn_prev')
const btn_next = document.getElementById('btn_next')

document.addEventListener('DOMContentLoaded', () => {
    sessionStorage.setItem('page', '1')
    render_projects(projects)   
    btn_prev.setAttribute('disabled', true)
})

btn_prev.addEventListener('click', ({currentTarget}) => {
    const page = Number(sessionStorage.getItem('page'))
    const current_page = page - 1

    if (current_page >= 1) {
        sessionStorage.setItem('page', String(current_page))
        render_projects(projects)
    } 

    if (current_page === 1)
        currentTarget.setAttribute('disabled', true)

    btn_next.removeAttribute('disabled')
})

btn_next.addEventListener('click', ({currentTarget}) => {
    const page = Number(sessionStorage.getItem('page'))
    const num_pages = Number(sessionStorage.getItem('pages'))
    const current_page = page + 1

    if (current_page <= num_pages) {
        sessionStorage.setItem('page', String(current_page))
        render_projects(projects)
    } 

    if (current_page === num_pages)
        currentTarget.setAttribute('disabled', true)

    btn_prev.removeAttribute('disabled')
})