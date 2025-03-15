import { Html, Head, Body, Container, Section, Text, Link } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  buttonLabel?: string;
  buttonUrl?: string;
}

export function EmailTemplate({ name, email, buttonLabel, buttonUrl }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Section style={{ textAlign: "center", padding: "20px", backgroundColor: "#4caf50", color: "white" }}>
            <Text style={{ fontSize: "24px", fontWeight: "bold" }}>SkilloMentality News</Text>
          </Section>
          <Section style={{ padding: "20px" }}>
            <Text>Ei, {name}(@{email})</Text>
            {buttonLabel && buttonUrl && (
              <Link
                href={buttonUrl}
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  padding: "10px 20px",
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                {buttonLabel}
              </Link>
            )}
          </Section>
          <Section style={{ textAlign: "center", fontSize: "12px", marginTop: "20px", color: "#aaa" }}>
            <Text>&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
