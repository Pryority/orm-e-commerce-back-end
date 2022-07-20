Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        food_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 10,
            validate: {
                isNumeric: true
            }
        },
        ingredients: [
            {
                name: "Pepperoni",
                type: DataTypes.INTEGER,
                references: {
                    model: 'category',
                    key: 'id'
                }
            },
        ]
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);