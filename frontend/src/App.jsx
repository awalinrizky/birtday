import Router from "./routes/Router";
import Loading from "./components/loading/Loading";
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

if (loading) return <Loading />;

export default function App(){

    return <Router/>

}