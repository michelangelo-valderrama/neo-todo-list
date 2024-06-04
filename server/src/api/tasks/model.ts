import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		done: { type: Boolean, default: false }
	},
	{
		timestamps: true
	}
)

const TaskModel = mongoose.model('Task', TaskSchema)
export default TaskModel
