import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Add content to Notion page
    await notion.blocks.children.append({
      block_id: process.env.NOTION_PAGE_ID!,
      children: [
        {
          object: 'block',
          type: 'heading_2',
          heading_2: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: `Contact Form Submission - ${new Date().toLocaleDateString()}`,
                },
              },
            ],
          },
        },
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: `Name: ${name}`,
                },
                annotations: {
                  bold: true,
                },
              },
            ],
          },
        },
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: `Email: ${email}`,
                },
                annotations: {
                  bold: true,
                },
              },
            ],
          },
        },
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: `Message: ${message}`,
                },
                annotations: {
                  bold: true,
                },
              },
            ],
          },
        },
        {
          object: 'block',
          type: 'divider',
          divider: {},
        },
      ],
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting to Notion:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
} 