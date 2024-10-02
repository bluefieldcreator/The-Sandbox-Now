// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

type Data = {
  post: {
    content: string
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const post = fs.readdirSync(path.join(process.cwd(), 'pages', 'api', 'news')).find(
        (file: string) => file.replace('.md', '') === req.query.slug
    );
    if (!post) {
        res.status(404).json({
            post: {
                content: "Page not found"
            }
        })
    }
    const markdown = fs.readFileSync(path.join(process.cwd(), 'pages', 'api', 'news', post), 'utf8');
    const html = marked(markdown);
    res.status(200).json({
        post: {
            content: html
        }
    })
}
