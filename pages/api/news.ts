import fs from 'fs';
import path from 'path';
// import marked
import { marked } from 'marked';

type Data = {
  data: {
    content: string;
    slug: string;
  };
}[]

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: ({ data: any; content: any; slug: string; } | undefined)[]): void; new(): any; }; }; }) {

  const files = fs.readdirSync(path.join(process.cwd(), 'pages', 'api', 'news'));

  const posts = files.map((file: string) => {
    const markdown = fs.readFileSync(path.join(process.cwd(), 'pages', 'api', 'news', file), 'utf8');
    const html = marked(markdown);
    return {
      data: {
        content: html,
        slug: file.replace('.md', ''),
        title: markdown.split('\n')[0].replace('#', '').replace('\r', '').trim()

      },
    };
  }
  )
  //@ts-ignore
  res.status(200).json(posts);
}