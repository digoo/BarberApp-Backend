module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // first the table we want to modify
      'avatar_id', // The name of the new column
      {
        // new information for the new column
        type: Sequelize.INTEGER, // it should be INT since we are going to reference the image id, not the image name
        references: { model: 'files', key: 'id' },
        // new reference, a foreign key, we add a reference and an object, so for model: we do add a reference for the table files
        // with the key: the id, so id from files table should be the same from avatar_id from users table
        onUpdate: 'CASCADE', // we must all add onUpdate and onDelete
        onDelete: 'SET NULL',
        allowNull: true,
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
