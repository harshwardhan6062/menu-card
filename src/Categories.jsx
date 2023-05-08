

export const Categories = ({ allCategories, updateCategories }) => {
    return (
        <div className="btn-container">
            {allCategories.map((category) => {
                return <button type='button' className="btn" onClick={() => updateCategories(category)}>{category}</button>
            })}
        </div>
    );
}

