import { Fragment, memo } from 'react';

const makeLog = () => console.log('hi from MainComponent'); // function to make logs from MainComponent

const MainComponent = () => {
    // also, we can use useCallback, but here is static function
    // const makeLog = useCallback(() => console.log('hi from MainComponent'), []);
    return (
        <Fragment>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from ChildComponent</button>
));
