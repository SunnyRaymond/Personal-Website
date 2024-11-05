import React, { useState } from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../../components/common/Particle";
import { createComment, getComments } from "../../services/apiComment";
import { useEffect } from "react";

const CustomComponent = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [isUsernameSet, setIsUsernameSet] = useState(false);

  // Fetch and format comments using your existing getComments function
  const loadComments = async () => {
    const comments = await getComments(); // This function should return the raw data from Supabase

    // Format comments to match the CommentSection component's requirements
    const formattedComments = comments.map((comment) => ({
      comId: comment.id.toString(), // Supabase `id` as `comId`
      fullName: comment.user || "Anonymous", // Default to "Anonymous" if user field is empty
      avatarUrl: `https://ui-avatars.com/api/?name=${
        comment.user || "Anonymous"
      }&background=random`,
      text: comment.comment,
      timestamp: new Date(comment.created_at).toLocaleString("en-US"),
      replies: [], // If you have a nested replies structure, add it here
    }));

    setData(formattedComments);
  };

  useEffect(() => {
    if (isUsernameSet) {
      loadComments();
    }
  }, [isUsernameSet]);

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsUsernameSet(true);
    }
  };

  const handleSubmit = async (newComment) => {
    // Extract the relevant fields for creating the comment in Supabase
    const commentData = {
      user: newComment.fullName, // the user's name
      comment: newComment.text, // the comment text
    };
    console.log("commentData", commentData);

    try {
      await createComment(commentData); // Call the function to create the comment in Supabase
      loadComments(); // Reload comments to show the latest comment
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <Container fluid className="about-content">
      <Particle />
      <Row>
        <Col xl={8} className="mx-auto">
          {!isUsernameSet ? (
            <Form onSubmit={handleUsernameSubmit} className="username-form">
              <Form.Group controlId="username">
                <Form.Label style={{ color: "whitesmoke", fontSize: "1.2rem" }}>
                  Enter your username to start commenting:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    border: "1px solid var(--secondary-color)",
                    borderRadius: "8px",
                    padding: "10px",
                    backgroundColor: "transparent",
                    color: "whitesmoke",
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  backgroundColor: "var(--primary-color)",
                  border: "none",
                  color: "white",
                  borderRadius: "5px",
                  padding: "8px 15px",
                  fontWeight: "bold",
                  fontFamily: "Raleway, sans-serif",
                  marginTop: "10px",
                }}
              >
                Submit
              </Button>
            </Form>
          ) : (
            <CommentSection
              currentUser={{
                currentUserId: "01a",
                currentUserImg: `https://ui-avatars.com/api/?name=${username}&background=random`,
                currentUserFullName: username,
              }}
              placeholder={"Leave a review..."}
              commentData={data}
              onSubmitAction={(data) => {
                console.log("check submit, ", data);
                handleSubmit(data);
              }}
              currentData={(data) => {
                console.log("current data", data);
              }}
              // Styling options to match your theme
              inputStyle={{
                border: "1px solid var(--secondary-color)",
                borderRadius: "8px",
                padding: "10px",
                backgroundColor: "transparent",
                color: "whitesmoke",
              }}
              formStyle={{
                backgroundColor: "var(--section-background-color)",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              }}
              submitBtnStyle={{
                backgroundColor: "var(--primary-color)",
                border: "none",
                color: "white",
                borderRadius: "5px",
                padding: "8px 15px",
                fontWeight: "bold",
                fontFamily: "Raleway, sans-serif",
              }}
              cancelBtnStyle={{
                backgroundColor: "gray",
                border: "none",
                color: "white",
                borderRadius: "5px",
                padding: "8px 15px",
                fontFamily: "Raleway, sans-serif",
              }}
              replyInputStyle={{
                borderBottom: "1px solid var(--secondary-color)",
                color: "whitesmoke",
              }}
              hrStyle={{
                borderTop: "1px solid var(--secondary-color)",
              }}
              titleStyle={{
                color: "whitesmoke",
                fontFamily: "Courier Prime, monospace",
              }}
              imgStyle={{
                borderRadius: "50%",
                border: "2px solid var(--secondary-color)",
              }}
              overlayStyle={{
                backgroundColor: "rgba(17, 16, 16, 0.9)",
                color: "white",
                textAlign: "left",
              }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CustomComponent;
