
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";


export default function Subscrition() {


    return (
        <main>
            <section>
                <div className="container">
                    <div className="mt30 mb30">
                        <Card title="pagina de Inscrição" />
                    </div> 
                    
                        <div className="dflex">
                            <Link to="/promotion">
                                <Button text="Ver promoção" />
                            </Link>
                        </div>
                    
                </div>
            </section>
        </main>
    );
}