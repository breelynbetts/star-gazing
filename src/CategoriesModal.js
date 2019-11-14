import React from 'react';
import Modali, { useModali } from 'modali';

import CategoryDisplay from './CategoryDisplay.js'

const CategoriesModal = () => {
    const [descriptionShow, toggleDescription] = useModali({
        large:true,
        closeButton:true,
    });

    return (
        <div className='categoryModal'>
            <button onClick={toggleDescription}>
                Event Category Descriptions!
            </button>
            <Modali.Modal {...descriptionShow}>
                <CategoryDisplay />
            </Modali.Modal>
        </div>
    )
}

export default CategoriesModal 