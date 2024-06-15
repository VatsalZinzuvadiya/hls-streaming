

const testController = async (req, res) => {
    const { tokenId } = req.body;
    try {
      const { refreshToken, accessToken, isOnBoarded } = await authService.googleAuthService(tokenId);
      res.json({
        refreshToken, accessToken, isOnBoarded,
      });
    } catch (error) {
      logger.error(`Error while google auth with token ID: ${tokenId}`, error);
      res.status(error.code || StatusCodes.INTERNAL_SERVER_ERROR);
      res.send('Something went wrong');
    }
  };

