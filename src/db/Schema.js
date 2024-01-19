import mongoose from 'mongoose';

let WebsiteMetadata, EmailModel;
if (mongoose.models.WebsiteMetadata) {
    WebsiteMetadata = mongoose.model('WebsiteMetadata');
} else {
    const MetadataSchema = new mongoose.Schema({
        logo_url: { type: String, required: true },
        button_text: { type: String, required: true },
        createdAt: { type: Date, required: true, default: Date.now }
    });

    WebsiteMetadata = mongoose.model('WebsiteMetadata', MetadataSchema);
}
if (mongoose.models.Email) {
    EmailModel = mongoose.model('Email');
} else {
    const EmailSchema = new mongoose.Schema({
        email: { type: 'string', required: true },
        createdAt: { type: Date, required: true, default: Date.now }
    });

    EmailModel = mongoose.model('Email', EmailSchema);
}

export { WebsiteMetadata, EmailModel };