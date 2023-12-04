/*'use client';
import NewsLayout from "@/components/news/newsLayout";
import { useRouter } from "next/router"
import { Col, Row, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { INews } from "@/interfaces/news";


export default function NewsPage(){
    const router = useRouter();
    const newId: number = parseInt(router.query.id as string);

    const post = news.find((p: INews) => {
        return p.id === newId;
    });

    return(
        <NewsLayout>
            {(post && post.id) ? (
                <Row className="pt-3">
                    <Col>
                        <div className="headerDiv" style={{background: `url(${post.image})`}}>
                            <h1>{post.title}</h1>
                        </div>
                        <p className="my-3 fw-bold">{post.lead}</p>
                        <div>
                            {post.description}
                        </div>
                        {post.hasComment}
                    </Col>
                </Row>
            ) : (
                <h1>Not Found</h1>
            )}
        </NewsLayout>
    )
}*/