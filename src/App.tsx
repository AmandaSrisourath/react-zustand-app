import { Button } from "@/components/ui/button";
import "./index.css";
import useCountStore from "./store/countStore";

function App() {
  const count = useCountStore((state) => state.count);
  const increaseCount = useCountStore((state) => state.increaseCount);
  const decreaseCount = useCountStore((state) => state.decreaseCount);
  const resetCount = useCountStore((state) => state.resetCount);
  const doubleCount = useCountStore((state) => state.getDoubleCount());

  // const { count, increaseCount, decreaseCount, resetCount } = useCountStore(
  //   useShallow((state) => ({
  //     count: state.count,
  //     increaseCount: state.increaseCount,
  //     decreaseCount: state.decreaseCount,
  //     resetCount: state.resetCount,
  //   })),
  // );

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <div className="mb-8">Count is {count}</div>
        <div className="mb-8">Double count is {doubleCount}</div>

        <div className="flex flex-row items-center justify-center gap-2">
          <Button variant="secondary" onClick={decreaseCount}>
            Decrease
          </Button>

          <Button variant="secondary" onClick={increaseCount}>
            Increase
          </Button>

          <Button variant="secondary" onClick={resetCount}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
