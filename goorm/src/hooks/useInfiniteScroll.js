import { useEffect, useRef } from "react";

import { debounce } from "../utils/debounce";

const useInfiniteScroll = ({ setNextList, isMoreData })=> {
    const listRef = useRef(null);

    const checkVisibleLastItem = () => {
        if (!listRef?.current) return;
    
        const scrollHeight = listRef?.current.scrollHeight;
        const scrollTop = listRef?.current.scrollTop;
        const clientHeight = listRef?.current.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight - 50) {
            if (isMoreData) {
                setNextList();
            }
        }
    }

    const handleDebounceScrollEvent = debounce(() => checkVisibleLastItem());

    useEffect(() => {
        listRef?.current?.addEventListener('scroll', handleDebounceScrollEvent);

        return () => {
            listRef?.current?.removeEventListener('scroll', handleDebounceScrollEvent);
        }
    }, [handleDebounceScrollEvent])

    return listRef;
};

export default useInfiniteScroll;