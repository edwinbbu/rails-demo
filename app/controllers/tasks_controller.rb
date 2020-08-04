class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def new
    render
  end

  def create
    puts task_params
    @task = Task.new(task_params)
    if @task.save
      render status: :ok, json: { notice: 'Task was successfully created' }
    else
      errors = @task.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors  }
    end
  end

  private

  def task_params
    params.require(:task).permit(:description)
  end
end
