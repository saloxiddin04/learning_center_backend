export default {
    name: 'teacher',
    title: 'Teachers',
    type: 'document',
    fields: [
        {
            name: 'full_name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().error('Full name is required')
        },
        {
            name: "image",
            title: "Teacher image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required().error('Image is required')
        },
        {
            name: 'ins',
            title: 'instagram',
            type: 'string',
            validation: Rule => Rule.required().error('Instagram is required')
        },
        {
            name: 'tg',
            title: 'telegram',
            type: 'string',
            validation: Rule => Rule.required().error('Telegram is required')
        },
    ]
}
