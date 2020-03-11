import NotesList from '../containers/Notes/NotesList'
import Settings from '../containers/Settings'
import NotFound from '../containers/NotFound'

export const routes = [
    {
        path: "/",
        exact: true,
        component: NotesList
    },
    {
        path: "/settings",
        exact: true,
        component: Settings
    },
    {
        path: "*",
        component: NotFound
    },
]