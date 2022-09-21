export default {
    title: 'Reviews',
    name: 'author',
    type: 'document',
    fields: [
        {
            title: 'Full name',
            name: 'full_name',
            type: 'string',
            validation: Rule => Rule.required().error('Full name is required')
        },
        {
            title: 'Text',
            name: 'text',
            type: 'text',
            validation: Rule => Rule.required().error('Text is required')
        },
        {
            title: 'Avatar',
            name: 'avatar',
            type: 'image',
            validation: Rule => Rule.required().error('Avatar is required')
        }
    ]
}
