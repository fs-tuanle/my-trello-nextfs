export interface ITasksRes {
    id: number;
    column_id: number;
    title: string;
    description: string | null;
    due_date: string | null;
    created_at: string;
    updated_at: string;
}