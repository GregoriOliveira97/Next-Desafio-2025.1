import { FormValue } from '@/schema/form';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request):Promise<Response> {
  const body: FormValue = await request.json()
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Titulo: SkilloMentality corp',
      react: EmailTemplate({ name: body.name,email:body.email }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({data}, {status:200});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}