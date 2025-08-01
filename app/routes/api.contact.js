export async function action({ request }) {
  console.log("=== API CONTACT ROUTE HIT ===");
  console.log("Method:", request.method);
  console.log("URL:", request.url);

  if (request.method !== "POST") {
    console.log("Method not allowed:", request.method);
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    console.log("Step 1: Parsing request body...");
    const formData = await request.json();
    console.log("Step 2: Form data received:", formData);

    // Basic validation
    if (!formData.name || !formData.email || !formData.datetime) {
      console.log("Step 3: Validation failed - missing required fields");
      return Response.json(
        {
          error: "Name, email, and preferred date/time are required",
        },
        { status: 400 }
      );
    }

    console.log("Step 4: Basic validation passed");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.log("Step 5: Email validation failed");
      return Response.json(
        {
          error: "Please enter a valid email address",
        },
        { status: 400 }
      );
    }

    console.log("Step 6: Email validation passed");

    // Try importing the email function
    console.log("Step 7: Attempting to import sendContactEmail...");
    const { sendContactEmail } = await import("../lib/email.server.js");
    console.log("Step 8: Import successful");

    console.log("Step 9: Calling sendContactEmail...");
    const result = await sendContactEmail(formData);
    console.log("Step 10: Email result:", result);

    if (result.success) {
      console.log("Step 11: Success - returning response");
      return Response.json({
        message:
          "Thank you! Your appointment request has been sent successfully.",
        messageId: result.messageId,
      });
    } else {
      console.error("Step 11: Email sending failed:", result.error);
      return Response.json(
        {
          error:
            "Failed to send email. Please try again or contact us directly.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("=== ERROR CAUGHT ===");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    console.error("===================");
    return Response.json(
      {
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
