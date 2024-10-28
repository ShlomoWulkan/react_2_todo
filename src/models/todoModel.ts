import { v4 } from "uuid"

export default class Todo {
    public id: string
    public completed: boolean = false
    public created_at: Date
    constructor(
        public title: string,
    ) {
        this.created_at = new Date()
        this.id = v4()
    }
}