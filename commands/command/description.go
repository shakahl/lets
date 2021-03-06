package command

func parseAndValidateDescription(desc interface{}, newCmd *Command) error {
	if value, ok := desc.(string); ok {
		newCmd.Description = value
	} else {
		return newParseCommandError(
			"must be a string",
			newCmd.Name,
			DESCRIPTION,
			"",
		)
	}

	return nil
}
