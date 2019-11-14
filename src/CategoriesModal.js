import React from 'react';
import Modali, { useModali } from 'modali';

import CategoryDisplay from './CategoryDisplay.js'
import './style/CategoriesModal.css'

const CategoriesModal = () => {
    const [descriptionShow, toggleDescription] = useModali({
        large:true,
        closeButton:true,
    });

    return (
        <div className='categoryModal'>
            <button onClick={toggleDescription} className='modalButton'>
                Click for Event Descriptions
            </button>
            <Modali.Modal {...descriptionShow}>
                <CategoryDisplay />
            </Modali.Modal>
        </div>
    )
}

export default CategoriesModal 