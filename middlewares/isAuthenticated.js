const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Authentication required. Please log in.",
        success: false,
      });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    });

    req.user = { id: decoded.id }; // Store user info in request

    next();
  } catch (error) {
    console.error("Authentication Error:", error);

    let message = "Invalid or expired token.";
    if (error.name === "TokenExpiredError") {
      message = "Session expired. Please log in again.";
    } else if (error.name === "JsonWebTokenError") {
      message = "Invalid token. Please log in again.";
    }

    return res.status(401).json({
      message,
      success: false,
    });
  }
};
