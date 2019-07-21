class AddingFirstTableToTheApplication < ActiveRecord::Migration[6.0]
  def change
    create_table :check_punctuations_history do |t|
      t.string :description
      t.string :drivers_name
      t.boolean :received_penalty
    end
  end
end
