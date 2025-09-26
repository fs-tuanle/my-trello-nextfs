export interface ITasksRes {
  id: number;
  column_id: number;
  name: string;
  desc: string | null;
  due_date: string | null;
  created_at: string;
  updated_at: string;
}
