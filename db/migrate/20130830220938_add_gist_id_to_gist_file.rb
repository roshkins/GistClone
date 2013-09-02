class AddGistIdToGistFile < ActiveRecord::Migration
  def change
    add_column :gist_files, :gist_id, :integer
    add_index :gist_files, :gist_id
  end
end
