import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
        <div>
            <div class="flex justify-center items-center">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Spinner;