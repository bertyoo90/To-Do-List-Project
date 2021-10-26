function initialLoad() {
    let content = document.querySelector('#content')

    const header = {
        pageHeader: document.createElement('header'),
        pageTitle: document.createElement('div'),
        headerNav: document.createElement('nav'),
        navContainer: document.createElement('div'),
        // sideBarButton: document.createElement('button'),
        homeButton: document.createElement('button')
    }

    const sideBar = {
        sideMenuContainer: document.createElement('div'),
        unorderedListContainer: document.createElement('ul'),
        sideHome: document.createElement('a'),
        todaysTasks: document.createElement('a'),
        projects: document.createElement('a'),
        projectContainer: document.createElement('ul'),
        projectOne: document.createElement('li'),
        projectTwo: document.createElement('li'),
        createProject: document.createElement('button')
    }

    const toDoList = {
        toDoContainer: document.createElement('div'),
        projectTitle: document.createElement('div'),
        toDoTask: document.createElement('div')
    }

    content.appendChild(header.pageHeader)
}









