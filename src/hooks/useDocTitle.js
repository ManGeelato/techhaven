import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Tech Haven`;
        } else {
            document.title = 'Tech Haven | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
