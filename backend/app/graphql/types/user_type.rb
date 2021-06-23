module Types
	class UserType < GraphQL::Schema::Object
		field :id, ID, null: false
		field :name, String, null: false
		field :email, String, null: false
		field :groups, [Types::GroupType], null: false
		field :issue_boards, [Types::IssueBoardType], null: false
	
		def self.authorized?(object, context)
			super && (object.id == context[:current_user].id)
		end
	end
end