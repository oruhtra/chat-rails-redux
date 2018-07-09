class AddSettingsToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :settings, :text
  end
end
